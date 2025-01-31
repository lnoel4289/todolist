import { create } from 'zustand'

interface Todo {
  id: number
  text: string
  completed: boolean
  // ajoutez d'autres propriétés si nécessaire
}

interface DoneListState {
  doneItems: Todo[]
  addToDoneList: (todo: Todo) => void
  removeFromDoneList: (id: number) => void
  clearDoneList: () => void
}

export const useDoneListStore = create<DoneListState>((set) => ({
  doneItems: [],
  
  addToDoneList: (todo) => 
    set((state) => ({
      doneItems: [...state.doneItems, todo]
    })),
  
  removeFromDoneList: (id) =>
    set((state) => ({
      doneItems: state.doneItems.filter(item => item.id !== id)
    })),
    
  clearDoneList: () => 
    set({ doneItems: [] })
})) 