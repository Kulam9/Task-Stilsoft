export default {
  getAllEntities() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Entity 1',
            numericField: 42,
            booleanField: true,
            dateField: '2024-05-03',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image1.jpg'
          },
          {
            id: 2,
            name: 'Entity 2',
            numericField: 25,
            booleanField: false,
            dateField: '2024-05-04',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image2.jpg'
          },
          {
            id: 3,
            name: 'Entity 3',
            numericField: 10,
            booleanField: true,
            dateField: '2024-05-05',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image3.jpg'
          },
          {
            id: 4,
            name: 'Entity 4',
            numericField: 55,
            booleanField: false,
            dateField: '2024-05-06',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image4.jpg'
          },
          {
            id: 5,
            name: 'Entity 5',
            numericField: 30,
            booleanField: true,
            dateField: '2024-05-07',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image5.jpg'
          },
          {
            id: 6,
            name: 'Entity 6',
            numericField: 18,
            booleanField: false,
            dateField: '2024-05-08',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image6.jpg'
          },
          {
            id: 7,
            name: 'Entity 7',
            numericField: 48,
            booleanField: true,
            dateField: '2024-05-09',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image7.jpg'
          },
          {
            id: 8,
            name: 'Entity 8',
            numericField: 22,
            booleanField: false,
            dateField: '2024-05-10',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image8.jpg'
          },
          {
            id: 9,
            name: 'Entity 9',
            numericField: 38,
            booleanField: true,
            dateField: '2024-05-11',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image9.jpg'
          },
          {
            id: 10,
            name: 'Entity 10',
            numericField: 60,
            booleanField: false,
            dateField: '2024-05-12',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image10.jpg'
          },
          {
            id: 11,
            name: 'Entity 11',
            numericField: 15,
            booleanField: true,
            dateField: '2024-05-13',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image11.jpg'
          },
          {
            id: 12,
            name: 'Entity 12',
            numericField: 42,
            booleanField: false,
            dateField: '2024-05-14',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image12.jpg'
          },
          {
            id: 13,
            name: 'Entity 13',
            numericField: 28,
            booleanField: true,
            dateField: '2024-05-15',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image13.jpg'
          },
          {
            id: 14,
            name: 'Entity 14',
            numericField: 50,
            booleanField: false,
            dateField: '2024-05-16',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image14.jpg'
          },
          {
            id: 15,
            name: 'Entity 15',
            numericField: 36,
            booleanField: true,
            dateField: '2024-05-17',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image15.jpg'
          },
          {
            id: 16,
            name: 'Entity 16',
            numericField: 45,
            booleanField: false,
            dateField: '2024-05-18',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image16.jpg'
          },
          {
            id: 17,
            name: 'Entity 17',
            numericField: 20,
            booleanField: true,
            dateField: '2024-05-19',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image17.jpg'
          },
          {
            id: 18,
            name: 'Entity 18',
            numericField: 33,
            booleanField: false,
            dateField: '2024-05-20',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image18.jpg'
          },
          {
            id: 19,
            name: 'Entity 19',
            numericField: 55,
            booleanField: true,
            dateField: '2024-05-21',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image19.jpg'
          },
          {
            id: 20,
            name: 'Entity 20',
            numericField: 10,
            booleanField: false,
            dateField: '2024-05-22',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image20.jpg'
          },
          {
            id: 21,
            name: 'Entity 21',
            numericField: 40,
            booleanField: true,
            dateField: '2024-05-23',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image21.jpg'
          },
          {
            id: 22,
            name: 'Entity 22',
            numericField: 27,
            booleanField: false,
            dateField: '2024-05-24',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image22.jpg'
          },
          {
            id: 23,
            name: 'Entity 23',
            numericField: 50,
            booleanField: true,
            dateField: '2024-05-25',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image23.jpg'
          },
          {
            id: 24,
            name: 'Entity 24',
            numericField: 35,
            booleanField: false,
            dateField: '2024-05-26',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image24.jpg'
          },
          {
            id: 25,
            name: 'Entity 25',
            numericField: 45,
            booleanField: true,
            dateField: '2024-05-27',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image25.jpg'
          },
          {
            id: 26,
            name: 'Entity 26',
            numericField: 15,
            booleanField: false,
            dateField: '2024-05-28',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image26.jpg'
          },
          {
            id: 27,
            name: 'Entity 27',
            numericField: 38,
            booleanField: true,
            dateField: '2024-05-29',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image27.jpg'
          },
          {
            id: 28,
            name: 'Entity 28',
            numericField: 52,
            booleanField: false,
            dateField: '2024-05-30',
            enumField: 'Option 1',
            imageUrl: 'https://example.com/image28.jpg'
          },
          {
            id: 29,
            name: 'Entity 29',
            numericField: 20,
            booleanField: true,
            dateField: '2024-05-31',
            enumField: 'Option 2',
            imageUrl: 'https://example.com/image29.jpg'
          },
          {
            id: 30,
            name: 'Entity 30',
            numericField: 42,
            booleanField: false,
            dateField: '2024-06-01',
            enumField: 'Option 3',
            imageUrl: 'https://example.com/image30.jpg'
          }
        ])
      }, 500)
    })
  },
  addEntity(entity: unknown) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(entity)
      }, 500)
    })
  },
  deleteEntity(id: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }
}
