import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import TaskSummary from '../features/tasks/components/TaskSummary'
import '@testing-library/jest-dom'

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
        expect(screen.getByText('Summary of Your Task')).toBeInTheDocument()
    })

    test('Completed task is shown', () => {
        expect(screen.getByText('<= 1 ? task : tasks')).toBeInTheDocument()
    })

    test('Uncompleted task is shown', () => {
        expect(screen.getByText('<= 1 ? task :tasks')).toBeInTheDocument()
    })

    test('See Your Task List is shown', () => {
        expect(screen.getByText('See Your Task List')).toBeInTheDocument()
    })

    test('Manage Your Task Progress is shown',() => {
        expect(screen.getByText('Manage Your Task Progress')).toBeInTheDocument()
    })
})