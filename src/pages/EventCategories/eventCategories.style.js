import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
    categoryPaper: {
        /* Auto layout */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '36px',
        position: 'static',
        height: '252px',
        left: '0px',
        top: '0px',
        background: 'rgba(255, 255, 255, 0.08)',
        border: '3px solid #0DB3B3',
        borderRadius: '5px',
        flex: 'none',
        order: '0',
        flexGrow: '0',
    }
}))
