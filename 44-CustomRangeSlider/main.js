const range = document.getElementById('range');
const range_label = document.getElementById('range_label');

range.addEventListener('input',(e)=>{

    const value = e.target.value;

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(range_label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)

    range_label.style.left = `${left}px`


    range_label.innerHTML = value;

});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }