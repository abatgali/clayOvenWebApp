import React from "react";

function VideoDemoModal() {
  return (
    <div>
      {/* Video Modal / Demo */}
      <div className="modal modal-video fade" id="modalVideo" role="dialog">
        <button className="close" data-dismiss="modal">
          <i className="ti ti-close" />
        </button>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <iframe height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDemoModal;
