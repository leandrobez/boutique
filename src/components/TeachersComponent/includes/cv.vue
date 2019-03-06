<template>
<div class="il-cv">
    <section class="il-cv--header">
        <h1>Curriculum Vitae</h1>
        <div class="profile"></div>
        <div class="name">
            <ul>
                <li>Candy (Chih-Ching) Tsai</li>
                <li>Educadora Física</li>
            </ul>
        </div>
        <h2 class="sm-name">Candy (Chih-Ching) Tsai<br>CREF - 12334</h2>
            <div class="social">
                <ul>
                    <li><a href="https://goo.gl/NqkodQ" target="_blank"><i class="mdi mdi-12px mdi-facebook"></i></a></li>
                    <li><a href="https://goo.gl/4P9h6M" target="_blank"><i class="mdi mdi-12px mdi-facebook"></i></a></li>
                    <li><a href="https://goo.gl/5cLXe7" target="_blank"><i class="mdi mdi-12px mdi-facebook"></i></a></li>
                </ul>
            </div>
    </section>
    <div class="wrapper">
        <section class="block info">
            <h2>Personal Information</h2>
            <ul>
                <li>E-mail: <span class="email"></span></li>
                <li>Location: New Taipei City, Taiwan</li>
            </ul>
        </section>
        <section class="block edu">
            <h2>Education</h2>
            <div class="degree">
                <h3>M.S. Graduate Institute of Biomedical Electronics and Bioinformatics</h3>
                <p class="research">Research Topic: Computer Aided Diagnosis for Breast Ultrasound based on Deep Learning</p>
                <p>National Taiwan University<br> 2015-Present
      </p>
            </div>
            <div class="degree">
                <h3>B.S. Bachelor Program of Biotechnology, B.B.A. Dept. of Marketing</h3>
                <p>National Chung Hsing University<br> 2010-2015
      </p>
            </div>
        </section>
        <section class="block exp">
            <h2>Experience</h2>
            <div class="exp-item">
                <h3>Software Development Intern</h3>
                <p><a href="https://www.yoctol.com/" target="_blank" rel="noopener noreferrer">Yoctol Info</a>
                </p>
                <p>2016/06 - 2017/03</p>
                <ul>
                    <li><a href="https://ptter.yoctol.com" target="_blank" rel="noopener noreferrer">Ptter</a> (Website and LINE bot) - Visualization tool for PTT</li>
                    <li><a href="https://www.yoctol.com/" target="_blank" rel="noopener noreferrer">Company Website</a></li>
                </ul>
            </div>
        </section>
        <footer>Last Updated: 2017-05-12. Designed by Candy Tsai.</footer>
    </div>
</div>
</template>

<script>
export default {
    name: 'cv'
}
</script>

<style scoped>
.il-cv{
    border: 2px solid #b8b6a3;
    padding: .45rem 1rem;
}
.il-cv--header{
    text-align: center;
    padding: 5%;
}
.il-cv--header h1 {
    white-space: nowrap;
    overflow: hidden;
}
</style>
