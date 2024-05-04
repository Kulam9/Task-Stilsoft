<template>
  <div>
    <input type="text" v-model="searchText" placeholder="Поиск" />
    <select v-model="sortBy">
      <option value="name">Имя</option>
      <option value="dateField">Дата</option>
    </select>
    <div v-for="(entity, index) in paginatedEntities" :key="index">
      <span>{{ entity.name }}</span>
      <span>{{ entity.dateField }}</span>
      <button @click="showDeleteModal(entity)">Удалить</button>
    </div>
    <button @click="prevPage">Назад</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage">Далее</button>
    <button @click="showAddModal">Добавить объект</button>
    <b-modal v-model="isAddModalOpen" title="Add Entity">
      <AddEntityDialog @entityAdded="handleEntityAdded" />
    </b-modal>
    <b-modal v-model="isDeleteModalOpen" title="Confirm Deletion">
      <DeleteConfirmationDialog @entityDeleted="handleEntityDeleted" />
    </b-modal>
  </div>
</template>

<style>
  button {
    border-radius: 5px;
    border: 1px solid orange;
    background-color: orange;
    color: #fff;
    margin: .5rem;
  }

  input {
    border: 1px solid orange;
    border-radius: 5px;
    /* border-right: none; */
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 0;
  }

  select {
    border: 1px solid orange;
    border-left: none;
    height: 1.75rem;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
  }
</style>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import _ from 'lodash'

import AddEntityDialog from './AddEntityDialog.vue'
import DeleteConfirmationDialog from './DeleteConfirmationDialog.vue'
import MockApiService from './MockApiService'

interface Entity {
  id: number
  name: string
  dateField: string
}

export default defineComponent({
  components: {
    AddEntityDialog,
    DeleteConfirmationDialog,
  },
  setup() {
    const entities = ref<Entity[]>([])
    const currentPage = ref(1)
    const pageSize = 12
    const sortBy = ref('name' as string)
    const searchText = ref('' as string)
    const isAddModalOpen = ref(false)
    const isDeleteModalOpen = ref(false)
    let entityToDelete: Entity | null = null

    const fetchData = async () => {
      try {
        const data = await MockApiService.getAllEntities()
        entities.value = data as Entity[]
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const filteredEntities = computed(() => {
      return entities.value.filter((entity: Entity) =>
        entity.name.toLowerCase().includes(searchText.value.toLowerCase())
      )
    })

    const sortedEntities = computed(() => {
      return _.orderBy(filteredEntities.value, sortBy.value)
    })

    const paginatedEntities = computed(() => {
      const start = (currentPage.value - 1) * pageSize
      return sortedEntities.value.slice(start, start + pageSize)
    })

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    const nextPage = () => {
      if (currentPage.value < Math.ceil(sortedEntities.value.length / pageSize)) {
        
        currentPage.value++
      }
    }

    const showAddModal = () => {
      isAddModalOpen.value = true
    }

    const showDeleteModal = (entity: Entity) => {
      entityToDelete = entity
      isDeleteModalOpen.value = true
    }

    const closeDeleteModal = () => {
      isDeleteModalOpen.value = false
    }

    const deleteEntity = () => {
      if (entityToDelete) {
        entities.value = entities.value.filter((entity) => entity.id !== entityToDelete!.id)
        closeDeleteModal()
      }
    }

    const handleEntityAdded = (newEntity: Entity) => {
      entities.value.push(newEntity)
      isAddModalOpen.value = false
    }

    const handleEntityDeleted = () => {
      if (entityToDelete) {
        entities.value = entities.value.filter((entity) => entity.id !== entityToDelete!.id)
        closeDeleteModal()
      }
    }

    fetchData()

    return {
      entities,
      currentPage,
      pageSize,
      sortBy,
      searchText,
      isAddModalOpen,
      isDeleteModalOpen,
      filteredEntities,
      sortedEntities,
      paginatedEntities,
      prevPage,
      nextPage,
      showAddModal,
      showDeleteModal,
      closeDeleteModal,
      deleteEntity,
      handleEntityAdded,
      handleEntityDeleted
    }
  }
})
</script>