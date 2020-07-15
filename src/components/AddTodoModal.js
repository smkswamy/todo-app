import React from 'react'

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class AddTodoModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onPriorityChange = this.onPriorityChange.bind(this);
        this.state = {
            toggle: false,
            title: '',
            description: '',
            date: '',
            priority: 'None'
        }
    }

    toggle(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
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
        this.toggle();
    }

    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-danger btn-circle btn-xl add-todo-button" onClick={this.toggle}>+</button>
                <div className="modal" style={this.state.toggle ? display : hide}>
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Todo</h4>
                                <button type="button" className="close" onClick={this.toggle} data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter title" value={this.state.title} onChange={this.onTitleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea rows="3" className="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.onDescriptionChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Due Date</label>
                                        <input type="date" className="form-control" name="dueDate" value={this.state.date} onChange={this.onDateChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Priority</label>
                                        <select className="form-control" value={this.state.priority} onChange={this.onPriorityChange}>
                                            <option value="None">None</option>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                    <div className="text-right">
                                        <button type="button" className="btn btn-default" onClick={this.toggle} data-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodoModal;