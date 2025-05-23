import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
    return app.gulp
        .src(`${app.path.src.svgicons}`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'SVG',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: '../icons/sprite.svg',
                    },
                },
                shape: {
                    transform: [
                        {
                            svgo: {
                                plugins: [
                                    {
                                        name: 'removeAttrs',
                                        params: {
                                            attrs: ['class', 'data-name'],
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            })
        )
        .pipe(app.gulp.dest(`${app.path.build.images}`));
};
