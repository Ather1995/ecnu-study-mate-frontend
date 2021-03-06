import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'


/**
 * @author Yiyang Xu
 */
class PlanListItem extends React.PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }


  render() {
    const { classes, content, title, time, onClick, id } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton onClick={onClick}>
              <MoreVertIcon/>
            </IconButton>
          }
          title={title}
          subheader={time}
        />
        <CardContent>
          <Typography variant="body1">{content}</Typography>
        </CardContent>
      </Card>
    )
  }
}

const styles = {
  card: {
    marginTop: 10,
    marginBottom: 20
  }
}
export default withStyles(styles)(PlanListItem)
