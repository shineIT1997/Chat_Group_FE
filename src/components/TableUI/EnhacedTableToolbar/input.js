import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

import useStyles from './style'

const EnhancedTableToolbar = (props) => {
  const { numSelected, title } = props

  const classes = useStyles()

  const rootClasses = numSelected > 0
    ? [ classes.rootEnhancedTable, classes.highlight ].join(' ')
    : classes.rootEnhancedTable

  return (
    <Toolbar
      className={rootClasses}
    >
      {numSelected > 0
        ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div">
            {numSelected} selected
          </Typography>
        )
        : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div">
            {title}
          </Typography>
        )}

      {numSelected > 0
        ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )
        : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
}

export default EnhancedTableToolbar
