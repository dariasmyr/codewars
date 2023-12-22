// DESCRIPTION:
// As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link to do all the dirty work in my place.

// What might not be so trivial is instead to get a decent breadcrumb from your current url. For this kata, your purpose is to create a function that takes a url, strips the first part (labelling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

// All elements need to be turned to uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper level folder.

// A few examples can be more helpful than thousands of words of explanation, so here you have them:

// generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
// Seems easy enough?

// Well, probably not so much, but we have one last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; a url composed of more words separated by - and equal or less than 30 characters long needs to be just uppercased with hyphens replaced by spaces.

// Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

// Examples:

// generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
// generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
// You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.

// If you like to test yourself with actual work/interview related kata, please also consider this one about building a string filter for Angular.js.



// My Solution
function generateBC(url, separator) {
  console.log(url);
  const form = (name, link, type) => {
    if (type === 'href') {
      return `<a href="/${link}">${name}</a>`;
    } else {
      return `<span class="active">${name}</span>`;
    }
  };

  function createAcronym(words) {
    const wordsToIgnore = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
    const array = words.split(/[-_\/]/);
    const updatedArray = array.filter((word) => !wordsToIgnore.includes(word.toLowerCase()));
    const acronymArray = updatedArray.map(word => word.charAt(0).toUpperCase());
    return acronymArray.join('');
  }

  const cleanedUrl = url.replace(/.*:\/\//, '');
  const parts = cleanedUrl.split('/');
  const partsFiltered = parts.filter(part => part && !part.toLowerCase().includes('index'));
  const resultArray = [];

  for (let i = 0; i < partsFiltered.length; i++) {
    let part = partsFiltered[i];
    part = part.split('?')[0];
    part = part.replace(/\..*|#.*$/, '');
    const isFirstElement = i === 0;
    const isLastElement = i === partsFiltered.length - 1;

    if (isFirstElement) {
      resultArray.push(form('HOME', '', partsFiltered.length === 1 ? 'span' : 'href'));
    } else {
      if (part.length >= 30 || part.toLowerCase().includes('index')) {
        const acronym = isLastElement ? form(createAcronym(part), parts.slice(1, i + 1).join('/') + '/', 'span') : form(createAcronym(part), partsFiltered.slice(1, i + 1).join('/') + '/', 'href');
        resultArray.push(acronym);
      } else {
        part = part.replace(/-/g, ' ');
        const formType = isLastElement ? 'span' : 'href';
        resultArray.push(form(part.toUpperCase(), partsFiltered.slice(1, i + 1).join('/') + '/', formType));
      }
    }
  }

  console.log(partsFiltered);
  const resultBreadcrumbs = resultArray.join(separator);
  return resultBreadcrumbs;
}
