const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions()
{
    // Button Click Active Class //
    for(let i = 0; i < sectBtn.length; i++)
    {
        sectBtn[i].addEventListener('click', function()
        {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'; // spasi dulu
        })
    }

    // Sections Active //
    allSections.addEventListener('click', (e) =>
    {
        const id = e.target.dataset.id;
        if (id)
        {
            // remove selected from the others buttons //
            sectBtns.forEach ((btn) =>
            {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide others sections //
            sections.forEach((section) =>
            {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();