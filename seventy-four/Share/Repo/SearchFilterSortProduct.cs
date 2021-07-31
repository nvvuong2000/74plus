using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Share.Repo
{
    public class SearchFilterSortProduct
    {
        public List<int> Categories { get; set; }
        public List<int> States { get; set; }
        public string Keyword { get; set; }
        public string Column { get; set; }
        public bool SortASC { get; set; }
    }
}