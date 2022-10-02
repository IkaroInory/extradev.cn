<template>
    <el-container id="global-container">
        <el-header id="global-container-header">
            <el-menu mode="horizontal" router :default-active="$route.path.split('/')[1]">
                <el-menu-item>
                    <div id="global-container-header-menu-title">EDTeam</div>
                </el-menu-item>

                <div style="flex-grow: 1;"/>

                <el-menu-item index="" route="/">
                    <icon-home/>&nbsp;{{ $t('component.header.menu.home') }}
                </el-menu-item>
                <el-menu-item index="projects" route="/projects">
                    <icon-flask/>&nbsp;{{ $t('component.header.menu.projects') }}
                </el-menu-item>
                <el-menu-item index="solutions" route="/solutions">
                    <icon-experiment-one/>&nbsp;{{ $t('component.header.menu.solutions') }}
                </el-menu-item>
                <el-menu-item index="docs" route="/docs/Conventional_Commits">
                    <icon-code/> {{$t('component.header.menu.documents')}}
                </el-menu-item>
                <el-menu-item index="about" route="/about">
                    <icon-info/>&nbsp;{{ $t('component.header.menu.about') }}
                </el-menu-item>

                <div style="flex-grow: 1;"/>

                <el-menu-item index="locale" route="/locale">
                    <icon-translate/>&nbsp;{{ $t('component.header.menu.languages') }}
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view style="text-align: center"/>
        </el-main>
        <el-footer id="global-container-footer" height="auto">
            © 2022 Extraordinary Development Team - {{ $t('component.footer.allRightsReserved') }}<br/>
            <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022117881号</a><br/>
            <router-link to="/locale" tag="el-link">
                <icon-international/>
                {{ $t('component.footer.locale') }}
            </router-link>
        </el-footer>
    </el-container>
</template>

<script>
    import Environment from "@/api/environment";

    export default {
        mounted() {
            Environment.initialize(this);
        }
    }
</script>

<style>
    a {
        text-decoration: none;
        color: #409eff;
    }

    a:hover {
        color: #79bbff;
    }

    .el-menu-item:hover, .el-menu-item:focus, .el-menu-item.is-active {
        background-color: white !important;
    }

    #global-container {
        width: 100%;
        height: 100%;

        left: 0;
        top: 0;

        position: absolute;
    }

    #global-container-header {
        padding: 0;
        text-align: center;
    }

    #global-container-header-menu-title {
        color: #409eff;
        font-size: 22px;
        font-weight: bold;
        line-height: 56px;
    }

    #global-container-footer {
        border-top: 1px solid var(--el-border-color);
        text-align: center;
    }
</style>
