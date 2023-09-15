import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { commonFaqsData, mCashFaqsData } from "./Faqs";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(1)
    // padding: theme.spacing(1)
  }
}));

const FaqSimple = () => {
  const classes = useStyles();
  const [mCashData, setMCashData] = useState([]);

  useEffect(() => {
    let output = commonFaqsData.filter(
      (faq, i) => typeof faq.answer === "object" && faq.answer
    );
    setMCashData(output);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" align="center" gutterBottom>
        COMMISSION FAQ
      </Typography>

      {commonFaqsData.map((faq, i) => (
        <Paper elevation={3} className={classes.paper} key={faq.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel-${faq.id}-content`}
              id={`panel-${faq.id}-header`}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>
              {typeof faq.answer !== "object" ? (
                faq.answer
              ) : (
                <ol type="a">
                  {Object.entries(faq.answer).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ol>
              )}
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}

      <Typography variant="h5" align="center" gutterBottom>
        MCASH FAQ
      </Typography>

      {mCashFaqsData.map((faq, i) => (
        <Paper elevation={3} className={classes.paper} key={faq.id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel-${faq.id}-content`}
              id={`panel-${faq.id}-header`}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>
              {typeof faq.answer !== "object" ? (
                faq.answer
              ) : (
                <ol type="a">
                  {Object.entries(faq.answer).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ol>
              )}
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Container>
  );
};

export default FaqSimple;
