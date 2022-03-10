import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    btn1: {
        fontSize: 16,
        backgroundColor: '#2A3B97',
        width: 184,
        height: 56,
        padding: 12,
        borderRadius: '0',
        '&:hover': {
            backgroundColor: '#0b053a',
        },
    },
    btn2: {
        backgroundColor: '#4B4C4F',
        fontSize: 16,
        width: 184,
        height: 56,
        padding: 12,
        borderRadius: '0',
        '&:hover': {
            backgroundColor: '#1f1f1f',
        },
    },
    cardStyle: {
        borderRadius: '0',
    },
    icon: {
        color: 'white',
    },
    pdng: {
        padding: '0',
    },
    mainBox: {
        width: 368,
        height: 304,
    },
})