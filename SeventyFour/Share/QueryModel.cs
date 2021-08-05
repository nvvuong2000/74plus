using System;

namespace RookieOnlineAssetManagement.Share
{
    public class QueryModel
    {
        private const int MaxPageSize = 50;

        private const int MinPageNumber = 1;

        private int _pageSize = 2;

        private int _pageNumber = 1;

        public string Keyword { get; set; }

        public string SortBy { get; set; }

        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = ( value > MaxPageSize || value <= 0) ? MaxPageSize : value;
            }
        }

        public int PageNumber
        {
            get
            {
                return _pageNumber;
            }
            set
            {
                _pageNumber = value >= MinPageNumber ? value : MinPageNumber;
            }
        }
    }
}
