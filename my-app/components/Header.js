import * as React from "react";
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Searchicon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

export default function Header({sezioni, titolo}){
    return(
        <React.Fragment>
            <Toolbar sx={{borderBottom: 1, borderColor: "divider"}}>
                <Button size="small">sottoscrivi</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{flex:1}}
                >
                    {titolo}
                </Typography>
                <IconButton>
                    <Searchicon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Iscriviti
                </Button>
            </Toolbar>

            <Toolbar
                component="nav"
                variant="dense"
                sx={{justifyContent: "space-between", overflowX: "auto"}}
            >
                {sezioni.map((sezione)=>(
                <Link
                    color="inherit"
                    noWrap
                    key={sezione.titolo}
                    variant="body"
                    href={sezione.url}
                    sx={{p: 1, flexShrink: 0}}
                >
                    {sezione.titolo}
                </Link>
            ))}

            </Toolbar>
        </React.Fragment>
    )
}