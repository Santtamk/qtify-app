import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Faqs.module.css'


export default function BasicAccordion() {
  return (
    <div>

        <div className={styles.h1}>
            <h1> FAQs</h1>
        </div>

        <div className={styles.accordion}>
        <Accordion className={styles.accordionStart}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#34C94B' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={styles.accordionTypo}>Is QTify free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
            <Typography>
            Yes! It is 100% free, and has 0% ads!
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  className={styles.accordionStart}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#34C94B' }}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={styles.accordionTypo}>Can I download and listen to songs online?</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
            <Typography>
            Sorry, unfortunately we don't provide the service to download any songs.
            </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}