import React from 'react'
import { db } from '@/plugins/firebase'
import firebase from 'firebase'
import dayjs from 'dayjs'

const noticeCollectionRef = db.collection('notices')

type FirestoreNotice = Omit<Notice, 'id'> & {
  date: firebase.firestore.Timestamp
}

export const useNotices = (onLoaded: () => void): [Notice[], React.Dispatch<React.SetStateAction<Notice[]>>] => {
  const [notices, setNotices] = React.useState<Notice[]>([])

  React.useEffect(() => {
    const unsubscribe = noticeCollectionRef.onSnapshot(querySnapshot => {
      const notices: Notice[] = querySnapshot.docs.map(doc => {
        const data = doc.data() as FirestoreNotice
        return {
          ...data,
          id: doc.id,
          date: dayjs(data.date.toDate()).format('YYYY/MM/DD')
        }
      })

      setNotices(notices)
    })
    onLoaded()
    return unsubscribe
  }, [])

  return [notices, setNotices]
}

export const addNotice = (id: string, notice: Notice) => noticeCollectionRef.doc(id).set(notice)

export const updateNotice = (id: string, notice: Notice) => noticeCollectionRef.doc(id).update(notice)

export const deleteNotice = (id: string) => noticeCollectionRef.doc(id).delete()
