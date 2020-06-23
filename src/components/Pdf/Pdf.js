import React from 'react';

// jsPDF
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// html2canvas
import html2canvas from 'html2canvas';
// Material Ui
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const Pdf = () => {
  const savePDF = () => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF();
    doc.autoTable({ html: '#table' });
    doc.save('shift-schedule.pdf');
  };
  return (
    <div>
      <Button onClick={savePDF}>
        Download <GetAppIcon />
      </Button>
    </div>
  );
};

export default Pdf;
