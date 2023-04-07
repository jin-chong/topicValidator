// If topic == J, then tags should include 'Golang'.
export default (obj) => {
    const { tags } = obj;
    let errs = [];
    if (!tags?.includes('Golang')) {
        errs.push(`tags should include 'GoLang'.`);
    }
    return errs.length > 0 ? errs : null;
}
