# DATA

## DATA layer

- List ToDo:
  - id
  - name
  - isDone

## DATA modifications

- Load tasks
- Toggle isDone
- Delete task

# COMPONENTS

## App

## Layout

- Shows "To Do App" title with heading
- Shows CreateForm component
- Shows TaskList component

## Task

- Receives a task
- Receives toggle isDone action
- Receives delete task action

- Shows a task
- Shows button component to toggle task
- Shows button component to delete task

- Sends "✅" to button component that shows if task is done
- Sends "🗒️" to button component that shows if task is not done
- Sends "🗑️" to button component that deletes task

- Sends toggle isDone action to button component that shows if task is done
- Sends detele task action to button component that delete task

## TaskList

- Receives a list of tasks

- Shows a list of tasks

- Sends a task to each Task component

## CreateForm

- Receives the add student action

- Shows an input for the new task with the label "New task"
- Shows a button "Create" to submit the form

- On submit executes the receives add task action

## Button

- Receives an icon
- Receives an action

- Shows the received icon inside the button

- On click executes the received action
