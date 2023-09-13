import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { CSSProperties } from '../../../../types'
import { Task } from '../../../../types'
import { TASK_MODAL_TYPE } from '../../../../constants/app'
import TaskModal from './TaskModal'
import { useTasksAction } from '../../hooks/Tasks'

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  task: Task
}

const TaskMenu = ({ setIsMenuOpen, task }: TaskMenuProps): JSX.Element => {

    const { deleteTask } = useTasksAction()

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const [type, setType] = useState<string>(TASK_MODAL_TYPE.ADD)

  return (
    <div style={styles.menu}>
      <div style={styles.menuItem}>
        <span className="material-symbols-outlined"
        onClick={(): void => {
            setType(TASK_MODAL_TYPE.EDIT)
            setIsModalOpen(true)
        }}
        >edit</span>Edit
      </div>
      <div style={styles.menuItem}
      onClick={(): void => {
        deleteTask(task.id)
        setIsMenuOpen(false)
      }}
      >
        <span className="material-symbols-outlined">delete</span>Delete
      </div>
      <span
        className="material-symbols-outlined"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsMenuOpen(false)
        }}
      >
        close
      </span>
      {isModalOpen && (
        < TaskModal
          headingTitle={type === TASK_MODAL_TYPE.ADD ? "Add your task" : "Edit your task"}
          type={type}
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={task.progressOrder}
          taskEdit={task}
          
        />
      )}
    </div>
  )
}

const styles: CSSProperties = {
  menu: {
    backgroundColor: '#fff',
    border: '1px solid gray',
    padding: '8px 16px',
    position: 'absolute',
    top: '-10px',
    right: '4%',
    zIndex: 10,
  },
  menuItem: {
    display: 'flex',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  closeIcon: {
    position: 'absolute',
    top: '0px',
    right: '2px',
    cursor: 'pointer',
  },
}

export default TaskMenu