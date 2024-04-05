import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Container from '@mui/material/Container';
import Header from "@/components/Header"

const theme = createTheme();
const sezioni= [
    {titolo: "Informatico", url: "/informatico"},
    {titolo: "Energie", url: "/energie"},
    {titolo: "Elettrico", url: "/elettrico"},
    {titolo: "Meccanico", url: "/meccanico"},
    {titolo: "Motoristico", url: "/motoristico"},
    {titolo: "Carrozzeria", url: "/carrozzeria"},
    {titolo: "Trasparenza", url: "/Trasparenza"}
]

export default function layout({children}){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Header titolo="CFP DON BOSCO" sezioni={sezioni} />
                <Head>
                    <title>Componenti</title>
                </Head>
                <main>
                    {children}
                </main>
            </Container>
        </ThemeProvider>
    )
}