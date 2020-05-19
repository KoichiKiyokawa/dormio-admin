import range from 'lodash/range'
import dayjs from 'dayjs'

export function getMockResidents(): Resident[] {
  return [
    { roomNumber: 101, name: '佐藤あけし' },
    { roomNumber: 102, name: '佐藤かけし' },
    { roomNumber: 103, name: '佐藤さけし' },
    { roomNumber: 104, name: '佐藤たけし' },
    { roomNumber: 105, name: '佐藤なけし' },
    { roomNumber: 106, name: '佐藤はけし' },
    { roomNumber: 107, name: '佐藤まけし' },
    { roomNumber: 108, name: '佐藤やけし' },
    { roomNumber: 109, name: '佐藤らけし' },
    { roomNumber: 110, name: '佐藤わけし' },
    { roomNumber: 201, name: '鈴木あけし' },
    { roomNumber: 202, name: '鈴木かけし' },
    { roomNumber: 203, name: '鈴木さけし' },
    { roomNumber: 204, name: '鈴木たけし' },
    { roomNumber: 205, name: '鈴木なけし' },
    { roomNumber: 206, name: '鈴木はけし' },
    { roomNumber: 207, name: '鈴木まけし' },
    { roomNumber: 208, name: '鈴木やけし' },
    { roomNumber: 209, name: '鈴木らけし' },
    { roomNumber: 210, name: '鈴木わけし' }
  ]
}

export function getMockNotices(): Notice[] {
  return range(1, 10 + 1).map(i => ({
    id: `${i}`,
    title: `お知らせ${i}`,
    body: `${i}日前、こんなことがありました`,
    date: dayjs().add(-i, 'day').toDate()
  }))
}
