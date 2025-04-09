document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to container after page load
    setTimeout(() => {
        document.querySelector('.container').classList.add('loaded');
    }, 100);

    // Form submission event
    document.getElementById('roadmapForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const language = document.getElementById('language').value;
        const months = document.getElementById('months').value;

        // Show loading animation
        const roadmapContainer = document.getElementById('roadmap');
        roadmapContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Generating your roadmap...</div>';

        // Simulate loading (remove in production)
        setTimeout(() => {
            generateRoadmap(language, months);
        }, 800);
    });
});

function generateRoadmap(language, months) {
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = '';

    // Add a heading for the generated roadmap
    const roadmapHeading = document.createElement('h2');
    roadmapHeading.className = 'roadmap-heading';
    roadmapHeading.innerHTML = `<i class="fas fa-route"></i> Your ${language.charAt(0).toUpperCase() + language.slice(1)} Learning Path`;
    roadmapContainer.appendChild(roadmapHeading);

    const roadmap = {
        python: [
            { topic: 'Basics of Python - Syntax, Variables, Data Types', details: ['Syntax', 'Variables', 'Data Types'] },
            { topic: 'Control Structures - If, Else, Loops', details: ['If Statements', 'Else Statements', 'Loops'] },
            { topic: 'Functions and Modules', details: ['Defining Functions', 'Calling Functions', 'Modules'] },
            { topic: 'Data Structures - Lists, Tuples, Dictionaries', details: ['Lists', 'Tuples', 'Dictionaries'] },
            { topic: 'Object-Oriented Programming', details: ['Classes', 'Objects', 'Inheritance'] },
            { topic: 'File Handling and Exceptions', details: ['File Operations', 'Exception Handling'] },
            { topic: 'Libraries and Frameworks - NumPy, Pandas', details: ['NumPy', 'Pandas'] },
            { topic: 'Web Development with Django/Flask', details: ['Django', 'Flask'] },
            { topic: 'Database Connectivity', details: ['Connecting to Databases', 'Performing CRUD Operations'] },
            { topic: 'Project Development', details: ['Project Planning', 'Implementation'] },
            { topic: 'Testing and Debugging', details: ['Writing Tests', 'Debugging'] },
            { topic: 'Advanced Topics and Final Project', details: ['Advanced Python', 'Final Project'] }
        ],
        javascript: [
            { topic: 'Basics of JavaScript - Syntax, Variables, Data Types', details: ['Syntax', 'Variables', 'Data Types'] },
            { topic: 'Control Structures - If, Else, Loops', details: ['If Statements', 'Else Statements', 'Loops'] },
            { topic: 'Functions and Scope', details: ['Defining Functions', 'Scope'] },
            { topic: 'DOM Manipulation', details: ['Selecting Elements', 'Manipulating Elements'] },
            { topic: 'Events and Event Handling', details: ['Event Listeners', 'Event Handling'] },
            { topic: 'ES6 Features', details: ['Arrow Functions', 'Promises', 'Classes'] },
            { topic: 'AJAX and Fetch API', details: ['AJAX', 'Fetch API'] },
            { topic: 'Libraries and Frameworks - React/Vue/Angular', details: ['React', 'Vue', 'Angular'] },
            { topic: 'Node.js and Express', details: ['Node.js', 'Express'] },
            { topic: 'Database Connectivity', details: ['Connecting to Databases', 'Performing CRUD Operations'] },
            { topic: 'Project Development', details: ['Project Planning', 'Implementation'] },
            { topic: 'Testing and Debugging', details: ['Writing Tests', 'Debugging'] },
            { topic: 'Advanced Topics and Final Project', details: ['Advanced JavaScript', 'Final Project'] }
        ],
        java: [
            { topic: 'Basics of Java - Syntax, Variables, Data Types', details: ['Syntax', 'Variables', 'Data Types'] },
            { topic: 'Control Structures - If, Else, Loops', details: ['If Statements', 'Else Statements', 'Loops'] },
            { topic: 'Functions and Methods', details: ['Defining Functions', 'Methods'] },
            { topic: 'Object-Oriented Programming', details: ['Classes', 'Objects', 'Inheritance', 'Polymorphism'] },
            { topic: 'Exception Handling', details: ['Try-Catch Blocks', 'Throwing Exceptions', 'Custom Exceptions'] },
            { topic: 'Collections Framework', details: ['Lists', 'Maps', 'Sets', 'Queues'] },
            { topic: 'File Handling', details: ['Reading Files', 'Writing Files', 'File Streams'] },
            { topic: 'Multithreading', details: ['Thread Creation', 'Synchronization', 'Concurrency'] },
            { topic: 'Libraries and Frameworks - Spring', details: ['Spring Core', 'Spring MVC', 'Spring Boot'] },
            { topic: 'Database Connectivity', details: ['JDBC', 'Hibernate'] },
            { topic: 'Project Development', details: ['Project Planning', 'Implementation'] },
            { topic: 'Testing and Debugging', details: ['Unit Testing', 'Integration Testing', 'Debugging Tools'] },
            { topic: 'Advanced Topics and Final Project', details: ['Advanced Java Concepts', 'Final Project'] }
        ],
        c: [
            { topic: 'Basics of C - Syntax, Variables, Data Types', details: ['Syntax', 'Variables', 'Data Types'] },
            { topic: 'Control Structures - If, Else, Loops', details: ['If Statements', 'Else Statements', 'Loops'] },
            { topic: 'Functions and Pointers', details: ['Defining Functions', 'Pointer Arithmetic'] },
            { topic: 'Arrays and Strings', details: ['Array Declaration', 'String Manipulation'] },
            { topic: 'Structures and Unions', details: ['Defining Structures', 'Union Types'] },
            { topic: 'File Handling', details: ['Opening Files', 'Reading Files', 'Writing Files'] },
            { topic: 'Dynamic Memory Allocation', details: ['Malloc', 'Calloc', 'Realloc'] },
            { topic: 'Libraries and Preprocessors', details: ['Standard Libraries', 'Preprocessor Directives'] },
            { topic: 'Embedded C', details: ['Microcontroller Programming', 'Interrupt Handling'] },
            { topic: 'Project Development', details: ['Project Planning', 'Implementation'] },
            { topic: 'Testing and Debugging', details: ['Unit Testing', 'Debugging Techniques'] },
            { topic: 'Advanced Topics and Final Project', details: ['Advanced C Programming', 'Final Project'] }
        ],
        reactjs: [
            { topic: 'Introduction to React and JSX', details: ['React Components', 'JSX Syntax'] },
            { topic: 'Components and Props', details: ['Functional Components', 'Class Components', 'Props'] },
            { topic: 'State and Lifecycle', details: ['State Management', 'Lifecycle Methods'] },
            { topic: 'Handling Events', details: ['Event Handling in React'] },
            { topic: 'Conditional Rendering', details: ['Rendering Techniques', 'Ternary Operator'] },
            { topic: 'Lists and Keys', details: ['Rendering Lists', 'Key Prop'] },
            { topic: 'Forms', details: ['Controlled Components', 'Form Submission'] },
            { topic: 'Lifting State Up', details: ['State Lifting Techniques'] },
            { topic: 'Composition vs Inheritance', details: ['Component Composition', 'Inheritance in React'] },
            { topic: 'React Router', details: ['Routing Setup', 'Route Parameters'] },
            { topic: 'React Hooks', details: ['useState', 'useEffect', 'Custom Hooks'] },
            { topic: 'Context API', details: ['Global State Management'] },
            { topic: 'Testing React Components', details: ['Unit Testing with Jest', 'React Testing Library'] },
            { topic: 'Optimizing Performance', details: ['Performance Best Practices'] },
            { topic: 'Advanced Patterns and Final Project', details: ['Advanced React Patterns', 'Final Project'] }
        ],
        nodejs: [
            { topic: 'Introduction to Node.js', details: ['Node.js Architecture', 'Event-Driven Programming'] },
            { topic: 'Node.js Modules', details: ['Built-in Modules', 'Creating Custom Modules'] },
            { topic: 'File System Module', details: ['Reading Files', 'Writing Files', 'File Streams'] },
            { topic: 'HTTP Module', details: ['Creating HTTP Server', 'Handling HTTP Requests'] },
            { topic: 'Express.js Framework', details: ['Routing', 'Middleware', 'Template Engines'] },
            { topic: 'Handling Requests and Responses', details: ['Request Parsing', 'Response Handling'] },
            { topic: 'Middleware in Express.js', details: ['Creating Custom Middleware', 'Third-Party Middleware'] },
            { topic: 'Working with Databases', details: ['Connecting to Databases', 'Executing Queries'] },
            { topic: 'Authentication and Authorization', details: ['Implementing Authentication', 'JWT Tokens'] },
            { topic: 'Error Handling', details: ['Error Middleware', 'Custom Error Handling'] },
            { topic: 'Testing Node.js Applications', details: ['Unit Testing', 'Integration Testing', 'Mocking'] },
            { topic: 'Real-time Applications with Socket.io', details: ['Setting up Socket.io', 'Real-time Communication'] },
            { topic: 'Deploying Node.js Applications', details: ['Deployment Strategies', 'Cloud Services'] },
            { topic: 'Node.js Best Practices and Final Project', details: ['Best Practices', 'Final Project'] }
        ],
        sql: [
            { topic: 'Introduction to Databases and SQL', details: ['Database Concepts', 'SQL Syntax'] },
            { topic: 'Basic SQL Syntax and Commands', details: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'] },
            { topic: 'Database Design and Normalization', details: ['Entity-Relationship Model', 'Normalization Forms'] },
            { topic: 'Constraints and Indexes', details: ['Primary Key', 'Foreign Key', 'Indexes'] },
            { topic: 'Joins and Subqueries', details: ['Inner Join', 'Outer Join', 'Subquery Types'] },
            { topic: 'SQL Functions and Procedures', details: ['Scalar Functions', 'Stored Procedures'] },
            { topic: 'Transactions and Locks', details: ['ACID Properties', 'Transaction Isolation Levels'] },
            { topic: 'Views and Indexes', details: ['Creating Views', 'Index Types'] },
            { topic: 'Advanced SQL Queries', details: ['Analytic Functions', 'Recursive Queries'] },
            { topic: 'Database Security and User Management', details: ['Grant and Revoke Permissions', 'User Roles'] },
            { topic: 'Working with NoSQL Databases', details: ['Document Stores', 'Key-Value Stores'] },
            { topic: 'Database Optimization and Performance Tuning', details: ['Query Optimization', 'Performance Monitoring'] },
            { topic: 'Backup and Recovery Strategies', details: ['Backup Types', 'Recovery Procedures'] },
            { topic: 'SQL Best Practices and Final Project', details: ['Best Practices', 'Final Project'] }
        ],
        cplusplus: [
            { topic: 'Basics of C++ - Syntax, Variables, Data Types', details: ['Syntax', 'Variables', 'Data Types'] },
            { topic: 'Control Structures - If, Else, Loops', details: ['If Statements', 'Else Statements', 'Loops'] },
            { topic: 'Functions and Function Overloading', details: ['Defining Functions', 'Function Overloading'] },
            { topic: 'Classes and Objects', details: ['Defining Classes', 'Object Creation'] },
            { topic: 'Inheritance and Polymorphism', details: ['Inheritance Types', 'Polymorphism Concepts'] },
            { topic: 'Operator Overloading', details: ['Overloading Operators', 'Operator Precedence'] },
            { topic: 'Templates and Generic Programming', details: ['Template Functions', 'Template Classes'] },
            { topic: 'STL - Standard Template Library', details: ['Containers', 'Algorithms', 'Iterators'] },
            { topic: 'File Handling in C++', details: ['File Streams', 'File Input/Output'] },
            { topic: 'Exception Handling', details: ['Try-Catch Blocks', 'Throwing Exceptions'] },
            { topic: 'Smart Pointers', details: ['Unique Pointers', 'Shared Pointers'] },
            { topic: 'Concurrency in C++', details: ['Threads', 'Mutexes', 'Condition Variables'] },
            { topic: 'Unit Testing in C++', details: ['Testing Frameworks', 'Test Case Writing'] },
            { topic: 'Advanced C++ Techniques and Final Project', details: ['Advanced C++ Concepts', 'Final Project'] }
        ],


    git: [
        { topic: 'Introduction to Version Control Systems', details: ['What is Version Control?', 'Types of Version Control Systems'] },
        { topic: 'Git Basics and Setup', details: ['Installing Git', 'Configuring Git', 'Git Commands'] },
        { topic: 'Working with Repositories', details: ['Initializing a Repository', 'Cloning', 'Forking'] },
        { topic: 'Tracking Changes', details: ['Adding and Committing Changes', 'Viewing History'] },
        { topic: 'Branching and Merging', details: ['Creating Branches', 'Switching Branches', 'Merging Changes'] },
        { topic: 'Remote Repositories', details: ['Pushing Changes', 'Pulling Changes', 'Managing Remotes'] },
        { topic: 'Collaborating with Git', details: ['Pull Requests', 'Forking Workflow', 'Code Reviews'] },
        { topic: 'Git Workflows', details: ['Feature Branch Workflow', 'Gitflow Workflow', 'Forking Workflow'] },
        { topic: 'Handling Conflicts', details: ['Merge Conflicts', 'Resolving Conflicts'] },
        { topic: 'Git Best Practices', details: ['Commit Guidelines', 'Branch Naming Conventions'] },
        { topic: 'Git Hooks', details: ['Pre-commit Hooks', 'Post-commit Hooks'] },
        { topic: 'Git Internals', details: ['Git Objects', 'Git References'] },
        { topic: 'Advanced Git Techniques', details: ['Rewriting History', 'Interactive Rebase'] },
        { topic: 'Git Tips and Tricks', details: ['Aliases', 'Git Bisect', 'Git Stash'] },
        { topic: 'Final Project - Git Workflow', details: ['Implement a Git Workflow', 'Collaborate on a Project'] }
    ],
    datastructures: [
        { topic: 'Introduction to Data Structures', details: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'] },
        { topic: 'Sorting Algorithms', details: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'] },
        { topic: 'Searching Algorithms', details: ['Linear Search', 'Binary Search', 'Depth-First Search (DFS)', 'Breadth-First Search (BFS)'] },
        { topic: 'Trees and Binary Trees', details: ['Binary Search Trees (BST)', 'AVL Trees', 'Heap Data Structure'] },
        { topic: 'Graph Data Structure', details: ['Representation of Graphs', 'Graph Traversal Algorithms'] },
        { topic: 'Hashing and Hash Tables', details: ['Hash Functions', 'Collision Handling', 'Hash Maps'] },
        { topic: 'Advanced Data Structures', details: ['Trie', 'Segment Tree', 'Red-Black Tree'] },
        { topic: 'Dynamic Programming', details: ['Optimal Substructure', 'Overlapping Subproblems', 'Memoization and Tabulation'] },
        { topic: 'String Algorithms', details: ['Pattern Matching', 'String Compression', 'Longest Common Subsequence'] },
        { topic: 'Advanced Topics in Data Structures', details: ['Persistent Data Structures', 'Spatial Data Structures', 'Concurrency Control'] },
        { topic: 'Applications of Data Structures', details: ['Algorithms in AI', 'Data Structures in Database Systems', 'Big Data Processing'] },
        { topic: 'Final Project - Data Structure Implementation', details: ['Design and Implement a Data Structure', 'Optimize for Performance'] }
    ],
    html: [
        { topic: 'Introduction to HTML', details: ['HTML Structure', 'Basic Tags', 'Attributes'] },
        { topic: 'HTML5 Features', details: ['Semantic Elements', 'Audio and Video Elements', 'Canvas'] },
        { topic: 'Forms and Input Elements', details: ['Form Structure', 'Input Types', 'Validation'] },
        { topic: 'Tables and Lists', details: ['Creating Tables', 'List Types', 'Nested Lists'] },
        { topic: 'Links and Images', details: ['Anchor Tags', 'Image Tags', 'Linking Pages'] },
        { topic: 'CSS Fundamentals', details: ['Internal CSS', 'External CSS', 'Inline Styles'] },
        { topic: 'Layout and Box Model', details: ['Block vs Inline Elements', 'Box Model', 'Margins and Padding'] },
        { topic: 'Responsive Web Design', details: ['Media Queries', 'Viewport Meta Tag', 'Flexible Layouts'] },
        { topic: 'Forms and Input Elements', details: ['Form Structure', 'Input Types', 'Validation'] },
        { topic: 'Accessibility Best Practices', details: ['Semantic HTML', 'ARIA Roles and Attributes'] },
        { topic: 'HTML5 APIs', details: ['LocalStorage', 'Geolocation API', 'Web Workers'] },
        { topic: 'SVG Graphics', details: ['Creating SVG Shapes', 'SVG Animation'] },
        { topic: 'Web Performance Optimization', details: ['Minification', 'Lazy Loading', 'Performance Metrics'] },
        { topic: 'SEO Basics', details: ['Meta Tags', 'Structured Data', 'SEO Tools'] },
        { topic: 'Final Project - Responsive Website', details: ['Design and Develop a Responsive Website', 'Optimize for SEO'] }
    ],
    css: [
        { topic: 'Introduction to CSS', details: ['CSS Syntax', 'CSS Selectors', 'CSS Properties'] },
        { topic: 'Selectors and Properties', details: ['ID Selectors', 'Class Selectors', 'Attribute Selectors'] },
        { topic: 'Box Model', details: ['Content', 'Padding', 'Border', 'Margin'] },
        { topic: 'Positioning', details: ['Static', 'Relative', 'Absolute', 'Fixed', 'Sticky'] },
        { topic: 'Flexbox', details: ['Flex Container', 'Flex Items', 'Alignments'] },
        { topic: 'Grid Layout', details: ['Grid Container', 'Grid Items', 'Grid Lines'] },
        { topic: 'Responsive Design', details: ['Media Queries', 'Responsive Units'] },
        { topic: 'CSS Transitions and Animations', details: ['Transition Properties', 'Keyframe Animations'] },
        { topic: 'CSS Preprocessors', details: ['Sass', 'Less', 'Benefits of Using Preprocessors'] },
        { topic: 'CSS Methodologies', details: ['BEM', 'SMACSS', 'CSS-in-JS'] },
        { topic: 'Accessibility in CSS', details: ['WCAG Guidelines', 'Improving Accessibility with CSS'] },
        { topic: 'CSS Frameworks', details: ['Bootstrap', 'Foundation', 'Materialize CSS'] },
        { topic: 'CSS Variables', details: ['Declaring Variables', 'Using Variables in Stylesheets'] },
        { topic: 'Modern CSS Features', details: ['Custom Properties', 'CSS Grid Layout', 'CSS Shapes'] },
        { topic: 'Final Project - CSS Styling Project', details: ['Implement a Complex Layout', 'Apply Advanced CSS Techniques'] }
    ],
    r: [
        { topic: 'Introduction to R Programming', details: ['R Basics', 'Data Types', 'Variables'] },
        { topic: 'Control Structures', details: ['If-else Statements', 'Loops in R'] },
        { topic: 'Functions and Packages', details: ['Defining Functions', 'Using Packages in R'] },
        { topic: 'Data Manipulation with dplyr', details: ['Filtering Data', 'Sorting Data', 'Grouping and Aggregating Data'] },
        { topic: 'Data Visualization with ggplot2', details: ['Creating Plots', 'Customizing Plots', 'Faceting'] },
        { topic: 'Statistical Analysis with R', details: ['Descriptive Statistics', 'Hypothesis Testing', 'Regression Analysis'] },
        { topic: 'Handling Missing Data', details: ['Identifying Missing Data', 'Dealing with Missing Values'] },
        { topic: 'Time Series Analysis', details: ['Time Series Data Structures', 'Forecasting Techniques'] },
        { topic: 'Machine Learning in R', details: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
        { topic: 'Web Scraping with R', details: ['Using rvest Package', 'Parsing HTML and XML'] },
        { topic: 'R Markdown', details: ['Creating Reports', 'Embedding Visualizations', 'Publishing Documents'] },
        { topic: 'Shiny Web Applications', details: ['Building Interactive Dashboards', 'Deploying Shiny Apps'] },
        { topic: 'Advanced R Programming', details: ['Functional Programming', 'Advanced Data Structures'] },
        { topic: 'Best Practices in R', details: ['Code Style Guidelines', 'Documentation', 'Version Control with RStudio'] },
        { topic: 'Final Project - Data Analysis Project in R', details: ['Perform Data Analysis', 'Create Visualizations', 'Write a Report'] }
    ]
};
const totalDays = months * 30; // Assuming 30 days in a month
    const languageRoadmap = roadmap[language];
    const daysPerItem = Math.ceil(totalDays / languageRoadmap.length);

    let currentDay = 1;

    // Create a wrapper for the roadmap timeline
    const timelineWrapper = document.createElement('div');
    timelineWrapper.className = 'timeline-wrapper';
    roadmapContainer.appendChild(timelineWrapper);

    // Add roadmap items with delay for animation
    languageRoadmap.forEach((item, index) => {
        const startDay = currentDay;
        const endDay = Math.min(currentDay + daysPerItem - 1, totalDays);

        // Create the roadmap item with improved formatting
        const roadmapItem = document.createElement('div');
        roadmapItem.className = 'roadmap-item';
        roadmapItem.style.animationDelay = `${index * 0.1}s`;

        // Add icon based on the topic (you can customize this further)
        let topicIcon = 'fa-code';
        if (item.topic.toLowerCase().includes('project')) {
            topicIcon = 'fa-project-diagram';
        } else if (item.topic.toLowerCase().includes('testing')) {
            topicIcon = 'fa-vial';
        } else if (item.topic.toLowerCase().includes('database')) {
            topicIcon = 'fa-database';
        } else if (item.topic.toLowerCase().includes('web')) {
            topicIcon = 'fa-globe';
        }

        // Format the roadmap item content
        roadmapItem.innerHTML = `
            <div class="roadmap-days">Day ${startDay} - Day ${endDay}</div>
            <div class="roadmap-topic"><i class="fas ${topicIcon}"></i> ${item.topic}</div>
        `;

        timelineWrapper.appendChild(roadmapItem);

        // Create details panel with improved styling
        const details = document.createElement('div');
        details.className = 'details';

        // Add a header to the details
        const detailsHeader = document.createElement('div');
        detailsHeader.className = 'details-header';
        detailsHeader.innerHTML = `<i class="fas fa-list-ul"></i> Topics to Learn:`;
        details.appendChild(detailsHeader);

        // Add each detail item with icons
        item.details.forEach(detail => {
            const detailItem = document.createElement('div');
            detailItem.className = 'detail-item';
            detailItem.innerHTML = `<i class="fas fa-check-circle"></i> ${detail}`;
            details.appendChild(detailItem);
        });

        timelineWrapper.appendChild(details);

        // Toggle details visibility with animation
        roadmapItem.addEventListener('click', () => {
            // Toggle active class for the roadmap item
            roadmapItem.classList.toggle('active');

            // Toggle details visibility with animation
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                // Animate height
                details.style.maxHeight = '0';
                setTimeout(() => {
                    details.style.maxHeight = details.scrollHeight + 'px';
                }, 10);
            } else {
                details.style.maxHeight = '0';
                // Wait for animation to complete before hiding
                setTimeout(() => {
                    details.style.display = 'none';
                }, 300);
            }
        });

        currentDay += daysPerItem;
    });

    // Add a completion message at the end
    const completionMessage = document.createElement('div');
    completionMessage.className = 'completion-message';
    completionMessage.innerHTML = `
        <i class="fas fa-trophy"></i>
        <p>Complete this roadmap to master ${language.charAt(0).toUpperCase() + language.slice(1)}!</p>
    `;
    roadmapContainer.appendChild(completionMessage);
}