import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          1. Qu'est-ce qu'un tableau de bord et à quoi sert-il ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Réponse : C'est un outil visuel pour suivre les KPI de l'entreprise, utilisé pour piloter l'activité et faciliter la prise de décisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          2. Quels types de KPI sont suivis dans ce tableau de bord ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Réponse : Il suit les KPI commerciaux comme le volume des ventes, la satisfaction client, et les délais de livraison.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          3. Comment puis-je personnaliser l'affichage des données ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Réponse : Vous pouvez sélectionner les KPI, ajuster les filtres, et choisir des types de visualisations comme des graphiques ou des tableaux.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          4. Comment le tableau de bord aide-t-il à la prise de décision ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Réponse : Il offre une vue d'ensemble en temps réel, permettant de détecter rapidement les écarts et d'agir en conséquence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          5. Qui peut accéder au tableau de bord ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Réponse : L'accès est contrôlé par des autorisations en fonction des rôles des utilisateurs au sein de l'entreprise.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;