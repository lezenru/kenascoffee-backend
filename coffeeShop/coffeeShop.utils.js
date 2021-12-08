export const processCategories = (caption) => {

        const Categories = caption.match(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g) || [];
        return Categories.map((category) => ({
            where: {category},
            create: {category},
        }));
}