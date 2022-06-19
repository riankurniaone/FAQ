import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    { 
      question: 'Apa itu Stunting?',
      answer: 'Stunting adalah kondisi gagal tumbuh pada anak balita (bayi di bawah 5 tahun) akibat dari kekurangan gizi kronis sehingga anak terlalu pendek untuk usianya.',
      open: true
    },
    {
      question: 'Apa ciri-ciri Stunting?',
      answer: 'Pertumbuhan melambat, Pertumbuhan gigi terlambat, Performa buruk pada kemampuan fokus dan memori, Anak menjadi lebih pendiam',
      open: true 
    },
    {
      question: 'Apa penyebab anak balita mengalami Stunting?',
      answer: 'Stunting menurut WHO (World Health Organization) disebabkan oleh kekurangan nutrisi pada bayi dalam waktu lama, kurang ASI, infeksi berulang, atau penyakit kronis yang menyebabkan masalah penyerapan nutrisi dari makanan.',
      open: true
    },
    {
      question: 'Bagaimana cara mengatasi Stunting?',
      answer: 'Memenuhi kebutuhan gizi sejak hamil, Memberi ASI eksklusif sampai bayi berusia 6 bulan, Dampingi ASI eksklusif dengan MPASI sehat, Rutin memriksa tumbuh kemabng anak, Selalu menjaga kebersihan lingkungan',
      open: true
    },
    {
      question: 'Apa saja dampak yang ditimbulkan akibat Stunting?',
      answer: 'Anak-anak stunting berisiko lebih tinggi mengidap penyakit degeneratif, seperti kanker, diabetes, dan obesitas. Hal ini disebabkan karena kebutuhan zat gizi mikro dan makro dalam tubuh tidak terpenuhi secara maksimal sehingga pembentukan fungsi sel tubuh dan lainnya tidak sempurna',
      open: true
    },
    {
      question: 'mengapa stunting merupakan masalah penyakit serius bagi genrasi yang akan datag?',
      answer: 'Stunting berpotensi memperlambat perkembangan otak, dengan dampak jangka panjang berupa keterbelakangan mental, rendahnya kemampuan belajar, dan risiko serangan penyakit kronis seperti diabetes, hipertensi, hingga obesitas.',
      open: true
    },
    {
      question: 'Bagaimana kondisi Stunting di Indoneisa?',
      answer: 'Berdasarkan data Survei Status Gizi Balita Indonesia (SSGBI) tahun 2021, prevalensi stunting saat ini masih berada pada angka 24,4 persen atau 5,33 juta balita. Prevalensi stunting ini telah mengalami penurunan dari tahun-tahun sebelumnya.',
      open: true
    },
    {
      question: 'Apa penyebab bayi kekurangan gizi?',
      answer: 'Berikut ini adalah beberapa faktor yang bisa menjadi penyebab balita gizi buruk: Kurang makan: Kurangnya asupan makanan bisa memicu kekurangan nutrien yang penting hingga berujung pada gizi buruk. Makan tidak teratur: Makan secara tidak teratur bisa memicu masalah pencernaan dan malnutrisi.',
      open: true
    },
    {
      question: 'Asupan gisi apa yang diperlukan?',
      answer: 'Protein adalah nutrisi yang amat penting untuk anak stunting. Pasalnya, anak stunting yang kekurangan protein tidak hanya terancam gagal tumbuh, tapi juga lebih mudah kehilangan massa otot, mengalami patah tulang, serta terkena penyakit infeksi. Kekurangan zat besi dapat menghambat pertumbuhan dan menyebabkan anemia.',
      open: true
    },
    {
      question: 'Apa saja yang harus dilakukan untuk mengatasi masalah gizi pada balita?',
      answer: 'Mengkonsumsi jenis sayur dan buah, mengkonsumsi protein, Memberikan susu dan produk olahannya seperti keju dan yoghurt, Memberikan makanan yang bersih dan terjamin kualitasnsya.',
      open: true
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
