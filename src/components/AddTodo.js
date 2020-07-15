import React from 'react'

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            date: '',
            priority: 'None'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onPriorityChange = this.onPriorityChange.bind(this);
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    onDateChange(e) {
        this.setState({
            date: e.target.value
        })
    }

    onPriorityChange(e) {
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit(e) {
        console.log('hi')
        e.preventDefault()
        if (!this.state.title.trim()) {
            return
        }
        this.props.addTodo({
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
            priority: this.state.priority
        })
        this.setState({
            title: '',
            description: '',
            date: '',
            priority: 'None'
        })
    }
    render() {
        return (
            <div>
                <h2>Add Todo</h2>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" placeholder="Enter title" value={this.state.title} onChange={this.onTitleChange} />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea rows="3" class="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.onDescriptionChange} />
                    </div>
                    <div class="form-group">
                        <label>Due Date</label>
                        <input type="date" class="form-control" name="dueDate" value={this.state.date} onChange={this.onDateChange} />
                    </div>
                    <div class="form-group">
                        <label>Priority</label>
                        <select class="form-control" value={this.state.priority} onChange={this.onPriorityChange}>
                            <option value="None">None</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-default">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo