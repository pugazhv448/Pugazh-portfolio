const darkmode =()=>{
    const themeToggleBtns = document.querySelectorAll('#light')
    const theme = localStorage.getItem('theme')

    theme && document.body.classList.add('theme')

    themeToggleBtns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            document.body.classList.toggle('light')
            if (document.body.classList.contains('light')) {
  
                localStorage.setItem('theme','light');
              
                } else {
                 localStorage.removeItem('theme');
                }
        })
    })
} 

export default darkmode


