<template>
    <el-card class="doc-container" shadow="always">
        <h1 style="text-align: center">约定式提交（Conventional Commits）</h1>
        <Avatar author="Guanyu Hu" time="2022.10.02 16:51:02">
            <img src="../../public/avators/ikaroinory.jpg"/>
        </Avatar>

        <h2>前言</h2>
        <p class="doc-paragraph">
            在常规开发中，经常用git来进行项目的版本控制，进而达到项目版本管理的目的。
            一个好的提交记录往往能够直观地反映当前更新的内容，但大多数时候，git的提交信息往往只有自己能够理解，因此，约定式提交诞生了。
        </p>
        <p class="doc-paragraph">
            在本文档中，我将描述EDTeam的所有项目对git提交的规范，后续将继续推出对项目代码中的规范与项目配置等文档。
        </p>

        <p class="doc-paragraph">
            一种好的规范有助于项目的开发。在此，我建议大家务必认真阅读该文章，并在今后的项目开发中认真履行开发规范。
        </p>

        <el-divider/>

        <h2>Commit规范</h2>
        <p class="doc-paragraph">
            提交说明的结构如下：
        </p>
        <Code language="args">
            &lt;type&gt;([scope])[!]: &lt;description&gt;<br/>
            [body]<br/>
            [footer(s)]<br/>
        </Code>
        <p>
            下面对上述参数进行解释。
        </p>
        <ol>
            <li>type</li>
            <ol style="list-style-type: lower-roman">
                <li>chore: 项目初始化。</li>
                <li>feat：增加新功能。</li>
                <li>fix：修复bug。</li>
                <li>style：样式修改、布局修改。</li>
                <li>test：测试环境部署及修改。</li>
                <li>docs：增加或修改文档。</li>
                <li>ci：持续集成相关文件修改。</li>
                <li style="color: #ff0000">revert：恢复上一次提交。</li>
                <li>perf：优化代码，以提高性能。</li>
                <li>refactor：在不影响功代码内部行为和功能的前提下重构代码。</li>
                <li>workflow：工作流相关文件修改。</li>
            </ol>
            <li>description：对提交的简要描述。</li>
        </ol>

        <el-divider/>
        <h2>branch规范</h2>
        <ol>
            <li>main：主分支。</li>
            <li>develop：开发分支。</li>
            <li>feature&lt;name&gt;：功能分支。</li>
            <li>bugfix&lt;name&gt;：修复分支。</li>
            <li>hotfix&lt;name&gt;：紧急修复分支。</li>
            <li>release&lt;name&gt;：预发布分支。</li>
        </ol>
        <el-divider/>

        <h2>参考</h2>
        <dl>
            <dd>[1] <a href="https://www.conventionalcommits.org" target="_blank">conventionalcommits.org</a></dd>
            <dd>[2] <a href="https://zhuanlan.zhihu.com/p/90281637" target="_blank">谭光志 git commit 提交规范</a></dd>
        </dl>
    </el-card>
</template>

<script>
    import Code from "@/components/Code";
    import Avatar from "@/components/Avatar";

    export default {
        name: "ConventionalCommitDoc",
        components: {Avatar, Code}
    }
</script>

<style scoped>
    .doc-container {
        text-align: left !important;
        max-width: 1024px;
    }

    .doc-paragraph {
        text-indent: 2em;
    }
</style>