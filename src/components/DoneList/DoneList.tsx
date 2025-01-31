import { FC } from 'react'
import { useDoneListStore } from '@/store/useDoneListStore'

export const DoneList: FC = () => {
  const { doneItems, removeFromDoneList, clearDoneList } = useDoneListStore()

  return (
    <div>
      <h2>Done Items</h2>
      <ul>
        {doneItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeFromDoneList(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearDoneList}>Clear All</button>
    </div>
  )
} 