document.addEventListener('DOMContentLoaded', function() {
            const preElements = document.querySelectorAll('pre');
            preElements.forEach(function(pre) {
                const textContent = pre.textContent;
                const formattedHtml = textContent.replace(/\n/g, '<br>');
                const newParagraph = document.createElement('p');
                newParagraph.innerHTML = formattedHtml;
                pre.parentNode.replaceChild(newParagraph, pre);
            });
        });