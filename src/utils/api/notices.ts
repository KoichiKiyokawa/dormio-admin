import { db } from '@/plugins/firebase'

const noticeCollectionRef = db.collection('notices')

export const syncNotices = (setNotice: (notices: Notice[]) => void) =>
  noticeCollectionRef.onSnapshot(querySnapshot => {
    const notices = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Notice)
    }))
    setNotice(notices)
  })

export const addNotice = (id: string, notice: Notice) => {
  noticeCollectionRef.doc(id).set(notice)
}

export const updateNotice = (id: string, notice: Notice) => {
  noticeCollectionRef.doc(id).update(notice)
}

export const deleteNotice = (id: string) => {
  noticeCollectionRef.doc(id).delete()
}
