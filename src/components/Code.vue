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
            this.renderer(this.language, this.$refs.code.innerText);
        },
        methods: {
            renderer(language, text) {
                switch (language) {
                    case 'args':
                        this.$refs.code.innerHTML = this.args(text);
                }
            },
            args(text) {
                let html = '';
                let isMustArg = false;
                let isOptionalArg = false;
                let stringBuffer = '';

                html += '<div class="code-line">';
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === '\n' && i !== text.length - 1) {
                        html += '</div>';
                        html += '<div class="code-line">';
                        continue;
                    }
                    if (text[i] === '<') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        isMustArg = true;
                        continue;
                    }
                    if (text[i] === '>') {
                        html += '<span style="color: #f07178;">' + stringBuffer + '</span>';
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        isMustArg = false;
                        stringBuffer = '';
                        continue;
                    }
                    if (text[i] === '[') {
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        isOptionalArg = true;
                        continue;
                    }
                    if (text[i] === ']') {
                        html += '<span style="color: #c3e88d;">' + stringBuffer + '</span>';
                        html += '<span style="color: #89ddff">' + text[i] + '</span>';
                        stringBuffer = '';
                        isOptionalArg = false;
                        continue;
                    }
                    if (isMustArg) {
                        stringBuffer += text[i];
                        continue;
                    }
                    if (isOptionalArg) {
                        stringBuffer += text[i];
                        continue;
                    }
                    html += text[i];
                }
                html += '</div>';
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
        font-family: "JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
</style>