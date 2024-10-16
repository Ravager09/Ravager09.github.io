document.addEventListener('DOMContentLoaded', function() {
    const columns = [
        'CustomerID', 'Age', 'Gender', 'Tenure', 'Usage Frequency', 'Support Calls',
        'Payment Delay', 'Subscription Type', 'Contract Length', 'Total Spend',
        'Last Interaction', 'Churn'
    ];

    const insights = [
        'Usage frequency and total spend are strong indicators of customer retention',
        'Longer contract lengths are associated with lower churn rates',
        'Premium plan subscribers are less likely to churn',
        'There\'s an opportunity to improve retention for basic plan and short-term contract customers',
        'Age may play a role in churn behavior, suggesting the need for age-specific retention strategies'
    ];

    const conclusions = [
        'High usage frequency and total spend correlate with lower churn rates',
        'Customers with longer contracts are more likely to stay',
        'Premium plans have the lowest churn rates among subscription types',
        'Basic plan and short-term contract customers are at higher risk of churning',
        'Age-specific retention strategies may be effective in reducing churn'
    ];

    function populateList(elementId, items) {
        const list = document.getElementById(elementId);
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }

    populateList('columns-list', columns);
    populateList('insights-list', insights);
    populateList('conclusions-list', conclusions);

    // Add smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});