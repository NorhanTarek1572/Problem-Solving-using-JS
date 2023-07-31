// // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function final_grade(exam_num , project_num){
    return( (exam_num>= 90 && project_num>10) ?
     100 : ( (exam_num>75 && project_num>=5) ?
      90 : ( (exam_num>50 && project_num>=2) ?
      75 :0  )      )  )
   
}
console.log(final_grade(90,12))