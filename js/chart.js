
    var ctx = document.getElementById('myChart');

    function drawChart(chartData) {
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temperatura Min', 'Temperatura Max'],
                datasets: [{
                    label: 'Gráfica de temp min & max en la ciudad',
                    data: chartData,
                    backgroundColor: [
                        'rgba(252, 191, 30, 1)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {

            }
        });
    }


