import type { Dispatch, SetStateAction } from "react";
import type { CSSProperties } from '../../../../types'
import { TASK_PROGRESS_ID } from "../../../../constants/app";

interface TaskFilterProps {
    setIsFilterOpen : Dispatch<SetStateAction<boolean>>
    setFilter : Dispatch<SetStateAction<Array<number>>>
}

const TaskFilter = ({setIsFilterOpen, setFilter }: TaskFilterProps): JSX.Element => {
    return (
        <div style={styles.menu} data-testid="filter-modal">
            <div
            style={styles.menuItem}
            onClick={(): void => {
                setFilter([TASK_PROGRESS_ID.COMPLETED])
                setIsFilterOpen(false)
            }}
            data-testid='completed-tasks'
            >
                <span className="material-symbols-outlined">done</span>
                Completed Tasks
            </div>
            <div
            style={styles.menuItem}
            onClick={(): void => {
                setFilter([
                    TASK_PROGRESS_ID.NOT_STARTED,
                    TASK_PROGRESS_ID.IN_PROGRESS,
                    TASK_PROGRESS_ID.WAITING,
                ])
                setIsFilterOpen(false)
            }}
            data-testid='uncompleted-tasks'
            >
                <span className="material-symbols-outlined">list</span>
                Uncompleted Tasks
            </div>
            <div
            style={styles.menuItem}
            onClick={(): void => {
                setFilter([0])
                setIsFilterOpen(false)
            }}
            data-testid='all-tasks'
            >
                <span className="material-symbols-outlined">menu_open</span>All Tasks
            </div>
        </div>
    )
}

const styles: CSSProperties = {
    menu: {
      backgroundColor: '#fff',
      border: '1px solid gray',
      padding: '8px 16px',
      position: 'absolute',
      top: '120px',
      left: '36%',
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

  export default TaskFilter
