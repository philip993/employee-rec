import React from 'react';

// jsPDF
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// html2canvas
import html2canvas from 'html2canvas';
// Style
import Styles from '../Style/Style';
// Material Ui
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const Pdf = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = `${day}.${month}.${year}`;
  const savePDF = () => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF();
    doc.autoTable({ html: '#table' });
    doc.save(`shift-schedule ${date}.pdf`);
  };
  const classes = Styles();

  return (
    <Button onClick={savePDF} className={classes.downloadBtn}>
      Download <GetAppIcon />
    </Button>
  );
};

export default Pdf;
