import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import TaskSummary from '../features/tasks/components/TaskSummary'
import '@testing-library/jest-dom'
import { completedTasksSelector, uncompletedTasksSelector } from '../features/tasks/TaskSelectors'

describe('TaskSummary', () => {
    beforeEach(() => {
        render (
            <RecoilRoot>
                <BrowserRouter>
                    <TaskSummary />
                </BrowserRouter>
            </RecoilRoot>
        )
    })

    test('Summary of Your Task Heading is shown', () => {
        expect(screen.getByText('Summary of Your Tasks')).toBeInTheDocument()
    })

    test('Completed task is shown', () => {
        expect(completedTasksSelector).toEqual(completedTasksSelector)
    })

    test('Uncompleted task is shown', () => {
        expect(uncompletedTasksSelector).toEqual(uncompletedTasksSelector)
    })

    test('See Your Task List is shown', () => {
        expect(screen.getByText('See Your Task List')).toBeInTheDocument()
    })

    test('Manage Your Task Progress is shown',() => {
        expect(screen.getByText('Manage Your Task Progress')).toBeInTheDocument()
    })
})