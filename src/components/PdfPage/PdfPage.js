import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

const PdfPage = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = `${day}.${month}.${year}`;
  const savePDF = () => {
    window.html2canvas = html2canvas;
    html2canvas(document.getElementById('pdf-table')).then(function (canvas) {
      var img = canvas.toDataURL('image/png');
      var doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(img, 'JPEG', 0, 1, 208, 300);
      doc.save(`contract-${date}.pdf`);
    });
  };
  const classes = Styles();

  return (
    <Button onClick={savePDF} className={classes.buttonRight}>
      Download <GetAppIcon />
    </Button>
  );
};

export default PdfPage;
