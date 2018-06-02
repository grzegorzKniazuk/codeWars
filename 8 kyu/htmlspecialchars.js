function htmlspecialchars(formData) {
    formData = formData.replace(/&/g,'&amp;');
    formData = formData.replace(/</g,'&lt;');
    formData = formData.replace(/>/g,'&gt;');
    formData = formData.replace(/"/g,'&quot;');

    return formData;
}