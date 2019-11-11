import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (cols[0]) classes += `col-xs-${cols[0]}`
        if (cols[0]) classes += `col-sm-${cols[0]}`
        if (cols[0]) classes += `col-md-${cols[0]}`
        if (cols[0]) classes += `col-lg-${cols[0]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}