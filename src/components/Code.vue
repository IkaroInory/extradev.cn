<template>
    <div class="code-style" ref="code">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Code",
        props: {
            language: String
        },
        mounted() {
            const text = this.$refs.code.innerText;
            switch (this.language) {
                case 'args':
                    this.$refs.code.innerHTML = this.arg(text);
                    break;
            }
        },
        methods: {
            arg(text) {
                let html = '';
                let mustArgCount = 0;
                let optionalArgCount = 0;
                let stringBuffer = '';
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === '<') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        mustArgCount++;
                        continue;
                    }
                    if (text[i] === '>') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        mustArgCount--;
                        continue;
                    }
                    if (text[i] === '[') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        optionalArgCount++;
                        continue;
                    }
                    if (text[i] === ']') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        optionalArgCount--;
                        continue;
                    }
                    if (mustArgCount > 0) {
                        html += '<span style="color: #f07178;">' + text[i] + '</span>';
                        stringBuffer += text[i];
                        continue;
                    }
                    if (optionalArgCount > 0) {
                        html += '<span style="color: #c3e88d;">' + text[i] + '</span>';
                        stringBuffer += text[i];
                        continue;
                    }
                    html += text[i];
                }
                return html;
            }
        }
    }
</script>

<style scoped>
    .code-style {
        background-color: #292d3e;
        color: #a6accd;
        border-radius: 8px;
        padding: 16px;
        white-space: pre-wrap;
        word-break: break-word;
        font-family: "JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
</style>