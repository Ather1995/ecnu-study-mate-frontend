import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    root: {
        maxWidth: 420,
        margin: 12,
        display: 'inline-block',
        verticalAlign: 'top',
    },
    heading: {
        fontSize: theme.typography.pxToRem (15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem (15),
        color: theme.palette.text.secondary,
    },
    thirdHeading:{
        fontSize: theme.typography.pxToRem (10),
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    row: {
        display: 'block',
        width: '100%'
    },
    bottom_right:{
        textAlign:'right',
        padding: '10px 0'

    },
    content:{
        textAlign: 'left'
    },

    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});


class HomeworkManageItem extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.initState();
    }

    state = {
        homeworkID:this.props.item.homeworkID,
        title:this.props.item.title,
        content:this.props.item.content,
        deadline:this.props.item.deadline,
        state:this.props.item.state,
        publisher:this.props.item.publisher,
        receiver:this.props.item.receiver,
        grade:this.props.item.grade,
        homework_file:this.props.item.homework_file,
        isDone:this.props.item.state==="finish",
        item:this.props.item,
        //弹出框属性
        open:false,
        editing:false
    }

    initState = () => {
        this.setState({
            homeworkID:this.props.item.homeworkID,
            title:this.props.item.title,
            content:this.props.item.content,
            deadline:this.props.item.deadline,
            state:this.props.item.state,
            publisher:this.props.item.publisher,
            receiver:this.props.item.receiver,
            grade:this.props.item.grade==null?"":this.props.item.grade,
            homework_file:this.props.item.homework_file,
            isDone:this.props.item.state==="finish",
            item:this.props.item,
            //弹出框属性
            open:false,
            editing:false
        })

    }
    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{this.state.title}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                学号: {this.state.receiver}
                            </Typography>
                        </div>
                        {this.state.isDone
                            ? <div className={classes.column} style={{color: '#43A047'}}>
                                已完成
                            </div>
                            : <div  className={classes.column} style={{color:'#c00'}}>未完成</div>}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.row}>
                            <div className={classes.content}>
                                {this.state.content}
                            </div>
                            <div className={classes.bottom_right}>
                                <Typography className={classes.thirdHeading}>
                                    截止日期：{this.state.deadline}
                                </Typography>
                            </div>
                            <div>
                                得分：{
                                    this.state.grade===""?'未评分':this.state.grade
                                }
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button size="small" onClick={()=>this.props.openDeleteDialog(this.state.item)} color="primary">
                            删除
                        </Button>
                        <Button size="small" onClick={()=>this.props.openEditDialog(this.state.item)} color="primary">
                            修改
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                {/*<Button
                    variant="extendedFab"
                    aria-label="add"
                    className={classes.button}
                    color="primary"
                    onClick={this.handleClickOpen}
                >
                    <AddIcon className={classes.extendedIcon} />
                    新增作业
                </Button>*/}

                {/*<Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {this.state.editing ? '编辑安排' : '新增安排'}
                    </DialogTitle>
                    <DialogActions>
                        {this.state.editing ?
                            <div>
                                <Button onClick={this.handleDeleteSchedule} color="secondary">
                                    删除
                                </Button>
                                <Button onClick={this.handleEditSchedule} color="primary">
                                    完成
                                </Button>
                            </div> :
                            <Button onClick={this.handleAddSchedule} color="primary">
                                完成
                            </Button>}
                    </DialogActions>
                </Dialog>*/}
            </div>

        );
    }
}

HomeworkManageItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
})
const mapDispatchToProps = dispatch =>({
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(HomeworkManageItem))

//export default withStyles (styles) (HomeworkItem);