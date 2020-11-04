import * as React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// const useStyles = makeStyles({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });
// const classes = useStyles();
const list = [
  {
    name: 'html',
    routLink: [
      {
        name: 'html5',
        link: '/html5'
      }
    ]
  },
  {
    name: 'css',
    routLink: [
      {
        name: 'css3',
        link: '/css3'
      }
    ]
  },
  {
    name: 'js'
  }
]
// type IProps = Readonly<{
//   history: any
// }>;
interface IProps extends RouteComponentProps {
}
class TreeList extends React.Component<IProps> {
  constructor (arg :any) {
    super(arg)
  }

  cabRoute (link: string) {
    this.props.history.push(link);
  }

  public render () {
    return (
        <TreeView
        // className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {
          list.map(opt => (
            <TreeItem nodeId={opt.name} label={opt.name}>
             {
               opt.routLink && opt.routLink.map(item => (
                  <TreeItem nodeId={item.name} label={item.name} onClick={() => {this.cabRoute(item.link)}} />
               ))
             }
            </TreeItem>
          ))
        }
      </TreeView>
    );
  }

}

export default withRouter(TreeList);
