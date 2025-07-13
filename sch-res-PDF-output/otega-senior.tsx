// <!DOCTYPE html>
export const html = `<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta author="Jac" />
        <link rel="stylesheet" href="./../" type="text/css"/>
        <style>
                    table {
            table-layout: auto;
            border: 2px solid gray;
        }

        td, th {
            border: 1px solid gold;
            width: 10em;
        }

        caption {
            font-weight: bolder;   
            text-transform: uppercase;    
        }

        .card-head, .bio-head, .attend {
            /* border: 1px solid black; */
            width: 35%;
            /* margin: 0 auto ; */
        }

        .bio-head {
            display: flex;
        }

        .head-part {
            display: flex;
        }

        /* body > div:nth-child(11) {
            width: 50%;
            display: flex;
            background-color: aqua;
        } */
        .princip-comment, .master-comment, .stamp{
            display: flex;
        }
        .princip-comment > p, .master-comment > p {
            width: 40%;
        }

        .stamp > p { 
            width: 50%;
        }
        </style>
    </head>
    <body>
        <div>
            <!-- use js to create a dynamic table, using an array with map method -->
             <section class="head-part">
                <!-- <section class="attend">
                    <h1>Third Term</h1>
                    <h1>Attendance</h1>
                    <h5>(Regularity and Puntuality)</h5>
                </section> -->
                <section class="card-head">
                    <h1>O'TEGA INTERNATIONAL COLLEGE</h1>
                    <h1>Class (SSS 2A) Broadsheet for 2025/2026 session</h1>
                </section>
                <!-- <section class="bio-head">
                    <div>
                        <p>Student Name: ...</p>
                        <p>Date of Birth: ...</p>
                        <p>Sex: ...</p>
                        <p>Admission No: ...</p>
                    </div>
                    <div>
                        <p>Class: ...</p>
                        <p>State: ...</p>
                        <p>Year: ...</p>
                    </div>
                </section> -->
             </section>
            
            <!-- <section>
                <table class="attendance"> -->
                    <!-- <caption>Attendance</caption> -->
                    <!-- <thead>
                        <tr>
                            <th></th>
                            <th>School</th>
                            <th>Sports & Athletics</th>
                            <th>Other Organized Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                No. of Times school Opened/Activities held
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                No. of Times Present
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                No. of Times Absent
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section> -->
            <!-- <section>
                <table>
                    <caption>Conduct</caption>
                    <thead>
                        <tr>
                            <th aria-colspan="2">GREEN for Examplary conduct</th>
                            <th>Red for Bad Conduct</th>
                            <th>Comments ... </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Number
                            </td>
                            <td>Deed</td>
                            <td>Number</td>
                            <td>.</td>
                        </tr>
                        <tr>
                            <td>.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section> -->
            <!-- <section>
                <table>
                    <caption>physical development health</caption>
                    <thead>
                        <tr>
                            <th>Height at the Beginning of the term</th>
                            <th>Weight at the Beginning of the term</th>
                            <th>No of Days Absent Due to Illness</th>
                            <th>Nature of Illness</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                m
                            </td>
                            <td>
                                Kg
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Cleanliness Rating</td>
                            <td>Good ...</td>
                            <td>Fair ...</td>
                            <td>Poor ...</td>
                            <td>Remark ... </td>
                        </tr>
                    </tbody>
                </table>
            </section> -->
            <section>
                <table>
                    <caption>Breakdown of Scores</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <!-- <th>Max Obtainable</th> -->
                            <th colspan="3">English language</th>
                            <th colspan="3">Mathematics</th>
                            <th colspan="3">Integrated Science</th>
                            <th colspan="3">Social Studies</th>
                            <th colspan="3">Yoruba</th>
                            <th colspan="3">Additional Mathematics</th>
                            <th colspan="3">physical & Health Educ</th>
                            <th colspan="3">Art</th>
                            <th colspan="3">Agric Science</th>
                            <th colspan="3">Home Economics</th>
                            <th colspan="3">Business Studies</th>
                            <th colspan="3">Introdutory Teechnology</th>
                            <th colspan="3">French</th>
                            <th colspan="3">Music</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                            <td>CA</td>
                            <td>EXAM</td>
                            <td>TOT</td>
                        </tr>
                        <tr>
                            <td>student1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                         <tr>
                            <td>student2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                         <tr>
                            <td>student3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                         <tr>
                            <td>student4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <!-- <section>
                <table>
                    <caption>Sports</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Indoor Games</th>
                            <th>Ball Games</th>
                            <th>Combative Games</th>
                            <th>Track</th>
                            <th>Jumps</th>
                            <th>Throws</th>
                            <th>Swimming</th>
                            <th>Weight Lifting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                level Attained
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Comments ...
                            </td>
                            <td>
                                Signature
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section> -->
            <!-- <section>
                <table>
                    <caption>clubs, youth organizations</caption>
                    <thead>
                        <tr>
                            <th>Organization</th>
                            <th>Office Held</th>
                            <th>Significant Contributions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>.</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section> -->
            <section class="master-comment">
                <p>Class Maaters' Comments</p>
                <p>Signature</p>
            </section>
            <section class="princip-comment">
                <p>Principal's Comments</p>
                <p>Signature</p>
            </section>
            <section class="stamp">
                <p>official Stamp</p>
                <img />
                <p>Date</p>
            </section>
            <!-- <section>
                <p>Parent's Name</p>
                <p>Signature</p>
            </section> -->
            
        </div>
    </body>
</html>`
// <!-- <script>
    // create an obj with items
    let resData = {
        sch: '',
        schLocation: '',
        fname: '',
        lname: '',
        mname: '',
        resDet: [{}],
        scoreData: [{sub: '', ca: '', exam: '', remark: ''}],
        sportsData: [{type: '', levelAttained: ''}],
        comment: '',
        sign: '',
        pix: '',

    }

    interface rawData {
        sch: string,
        schLocation: string,
        fname: string,
        lname: string,
        mname: string,
        resDet: object[],
        scoreData: object[],
        sportsData: object[],
        comment: string,
        sign: string,
        pix: string,
    }

// </script> -->