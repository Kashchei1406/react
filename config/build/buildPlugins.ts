import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins ({paths}: BuildOptions): webpack.WebpackPluginInstance[]{

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        //webpack.ProgressPlugin - Помогает отслеживать на каком этапе сборка(в процентах)
        new webpack.ProgressPlugin()
    ]
}